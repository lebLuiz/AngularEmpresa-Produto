package br.com.backendproject.service.implement;

import br.com.backendproject.domain.Produto;
import br.com.backendproject.repository.implement.ProdutoRepository;
import br.com.backendproject.service.interfaces.IProdutoService;
import java.util.List;

public class ProdutoService implements IProdutoService{

    @Override
    public Produto save(Produto produto) {
        
        ProdutoRepository repository = new ProdutoRepository();
        
        return repository.save(produto);
        
    }

    @Override
    public Produto update(Produto produto) {
        
        ProdutoRepository repository = new ProdutoRepository();
        
        return repository.update(produto);
        
    }

    @Override
    public void delete(Long idProduto) {
        ProdutoRepository repository = new ProdutoRepository();
        
        repository.delete(idProduto);
    }

    @Override
    public Produto findOne(Long idProduto) {
        
        ProdutoRepository repository = new ProdutoRepository();
        
        return repository.findOne(idProduto);
    }

    @Override
    public List<Produto> findAll() {
        
        ProdutoRepository repository = new ProdutoRepository();
        
        return repository.findAll();
        
    }

    @Override
    public List<Produto> findByIdEmpresa(Long idEmpresa) {
        ProdutoRepository repository = new ProdutoRepository();
        
        return repository.findByIdEmpresa(idEmpresa);
    }
    
}
