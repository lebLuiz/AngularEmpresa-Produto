package br.com.backendproject.repository.interfaces;

import br.com.backendproject.domain.Produto;
import java.util.List;

public interface IProdutoRepository extends IRepository<Produto>{
    
    List<Produto> findByIdEmpresa(Long idEmpresa);
    
    //void deleteByIdProduto(Long idProduto);
    
}
