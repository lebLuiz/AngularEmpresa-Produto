package br.com.backendproject.service.interfaces;

import br.com.backendproject.domain.Produto;
import java.util.List;

public interface IProdutoService extends IService<Produto>{
    
    List<Produto> findByIdEmpresa(Long idEmpresa);
    
    //void deleteByIdProduto(Long idProduto);
    
}
