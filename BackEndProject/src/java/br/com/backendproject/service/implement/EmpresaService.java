package br.com.backendproject.service.implement;

import br.com.backendproject.domain.Empresa;
import br.com.backendproject.repository.implement.EmpresaRepository;
import br.com.backendproject.service.interfaces.IEmpresaService;
import java.util.List;

public class EmpresaService implements IEmpresaService{

    @Override
    public Empresa save(Empresa empresa) {
        EmpresaRepository repository = new EmpresaRepository();
        
        return repository.save(empresa);
    }

    @Override
    public Empresa update(Empresa empresa) {
        EmpresaRepository repository = new EmpresaRepository();
        
        return repository.update(empresa);
    }

    @Override
    public void delete(Long idEmpresa) {
        EmpresaRepository repository = new EmpresaRepository();
        
        repository.delete(idEmpresa);
    }

    @Override
    public Empresa findOne(Long idEmpresa) {
        EmpresaRepository repository = new EmpresaRepository();
        
        return repository.findOne(idEmpresa);
    }

    @Override
    public List<Empresa> findAll() {
        EmpresaRepository repository = new EmpresaRepository();
        
        return repository.findAll();
    }
    
    //Métodos abstratos do Produto
    @Override
    public Empresa findByIdProduto(Long idProduto) {
        return null;
    }

    @Override
    public void deleteByIdProduto(Long idProduto) {
    }
}
