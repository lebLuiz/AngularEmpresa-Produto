package br.com.backendproject.service.interfaces;

import br.com.backendproject.domain.Empresa;

public interface IEmpresaService extends IService<Empresa>{
    
    Empresa findByIdProduto(Long idProduto);
    
    void deleteByIdProduto(Long idProduto);
}
