package com.silvia.backend.service;

import com.silvia.backend.model.Tarefa;
import com.silvia.backend.repository.TarefaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class TarefaService {

    private final TarefaRepository repository;

    public TarefaService(TarefaRepository repository) {
        this.repository = repository;
    }

    public List<Tarefa> listarTodas() {
        return repository.findAll();
    }

    public Tarefa buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Tarefa não encontrada"));
    }

    public Tarefa criar(Tarefa tarefa) {
        tarefa.setId(null);
        return repository.save(tarefa);
    }

    public Tarefa atualizar(Long id, Tarefa dados) {
        Tarefa tarefa = buscarPorId(id);
        tarefa.setTitulo(dados.getTitulo());
        tarefa.setConcluida(dados.isConcluida());
        return repository.save(tarefa);
    }

    public void excluir(Long id) {
        Tarefa tarefa = buscarPorId(id);
        repository.delete(tarefa);
    }
}