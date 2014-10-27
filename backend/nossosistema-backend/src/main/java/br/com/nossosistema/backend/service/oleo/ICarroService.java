package br.com.nossosistema.backend.service.oleo;

import br.com.nossosistema.backend.bean.oleo.Carro;

public interface ICarroService {

	public abstract Carro findCarroByCdPlaca(String cdPlaca);

}
