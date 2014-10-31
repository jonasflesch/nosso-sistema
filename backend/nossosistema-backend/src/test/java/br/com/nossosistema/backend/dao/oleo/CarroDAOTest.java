package br.com.nossosistema.backend.dao.oleo;

import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import br.com.nossosistema.backend.TestConfig;
import br.com.nossosistema.backend.bean.oleo.Carro;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = TestConfig.class)
public class CarroDAOTest extends AbstractTransactionalJUnit4SpringContextTests{

	@Autowired
	private CarroDAO carroDAO;
	
	@Test
	public void findCarroByCdPlaca(){
		Carro carro = carroDAO.findCarroByCdPlaca("INH5581");
		assertThat("Deve retornar um carro", carro, notNullValue(Carro.class));
	}
	
}
