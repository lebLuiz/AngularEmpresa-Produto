package br.com.backendproject.repository.interfaces;

import br.com.backendproject.domain.Empresa;

public interface IEmpresaRepository extends IRepository<Empresa>{
    
    Empresa findByIdProduto(Long idProduto);
    
    void deleteByIdProduto(Long idProduto);
}
