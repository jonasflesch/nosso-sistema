package br.com.nossosistema.backend.service.oleo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.nossosistema.backend.bean.oleo.Carro;
import br.com.nossosistema.backend.dao.oleo.CarroDAO;

@Service
public class CarroService implements ICarroService {
	
	@Autowired
	private CarroDAO carroDAO;
	
	@Override
	public Carro findCarroByCdPlaca(String cdPlaca){
		return carroDAO.findCarroByCdPlaca(cdPlaca);
	}

}
