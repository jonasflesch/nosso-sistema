package br.com.nossosistema.backend.controller.oleo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.nossosistema.backend.bean.oleo.Carro;
import br.com.nossosistema.backend.service.oleo.ICarroService;

@RestController
@RequestMapping("/oleo")
public class ReceberCarroRestController {
	
	@Autowired
	private ICarroService carroService;

	@RequestMapping(value = "/findCarroByCdPlaca/{cdplaca}", method = RequestMethod.GET)
	public Carro findCarroByCdPlaca(@PathVariable("cdplaca") String cdPlaca){
		return carroService.findCarroByCdPlaca(cdPlaca);
	}
	
}
