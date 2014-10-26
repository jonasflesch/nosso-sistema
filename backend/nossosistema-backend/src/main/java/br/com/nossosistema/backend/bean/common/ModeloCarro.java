package br.com.nossosistema.backend.bean.common;

public class ModeloCarro {
	
	private Long idModeloCarro;
	
	private String dsDescricao;
	
	private FabricanteCarro fabricante;
	
	public Long getIdModeloCarro() {
		return idModeloCarro;
	}

	public void setIdModeloCarro(Long idModeloCarro) {
		this.idModeloCarro = idModeloCarro;
	}

	public String getDsDescricao() {
		return dsDescricao;
	}

	public void setDsDescricao(String dsDescricao) {
		this.dsDescricao = dsDescricao;
	}

	public FabricanteCarro getFabricante() {
		return fabricante;
	}

	public void setFabricante(FabricanteCarro fabricante) {
		this.fabricante = fabricante;
	}

}
