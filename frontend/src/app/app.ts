import { Component, OnInit, computed, inject, signal } from '@angular/core';

import { Tarefa } from './models/tarefa';
import { TarefaService } from './services/tarefa.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private tarefaService = inject(TarefaService);

  protected readonly tarefas = signal<Tarefa[]>([]);
  protected readonly erro = signal('');
  protected readonly pendentes = computed(
    () => this.tarefas().filter(t => !t.concluida).length
  );

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.tarefaService.listar().subscribe({
      next: (lista) => {
        this.tarefas.set(lista);
        this.erro.set('');
      },
      error: () => this.erro.set('Não foi possível conectar à API. Verifique se o back-end está rodando.')
    });
  }

  adicionar(campo: HTMLInputElement): void {
    const titulo = campo.value.trim();
    if (!titulo) {
      return;
    }

    this.tarefaService.criar({ titulo, concluida: false }).subscribe({
      next: (nova) => {
        this.tarefas.update(lista => [...lista, nova]);
        campo.value = '';
        this.erro.set('');
      },
      error: () => this.erro.set('Erro ao adicionar a tarefa.')
    });
  }

  alternar(tarefa: Tarefa): void {
    const alterada = { ...tarefa, concluida: !tarefa.concluida };

    this.tarefaService.atualizar(alterada).subscribe({
      next: (atualizada) => {
        this.tarefas.update(lista =>
          lista.map(t => (t.id === atualizada.id ? atualizada : t))
        );
      },
      error: () => this.erro.set('Erro ao atualizar a tarefa.')
    });
  }

  excluir(tarefa: Tarefa): void {
    if (tarefa.id == null) {
      return;
    }

    this.tarefaService.excluir(tarefa.id).subscribe({
      next: () => {
        this.tarefas.update(lista => lista.filter(t => t.id !== tarefa.id));
      },
      error: () => this.erro.set('Erro ao excluir a tarefa.')
    });
  }
}