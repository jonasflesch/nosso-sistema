package br.com.nossosistema.backend.bean.oleo;

import br.com.nossosistema.backend.bean.common.ModeloCarro;

public class Carro {
	
	private Long idCarro;
	
	private String cdPlaca;
	
	private ModeloCarro modelo;

	public Long getIdCarro() {
		return idCarro;
	}

	public void setIdCarro(Long idCarro) {
		this.idCarro = idCarro;
	}

	public String getCdPlaca() {
		return cdPlaca;
	}

	public void setCdPlaca(String cdPlaca) {
		this.cdPlaca = cdPlaca;
	}

	public ModeloCarro getModelo() {
		return modelo;
	}

	public void setModelo(ModeloCarro modelo) {
		this.modelo = modelo;
	}

}
