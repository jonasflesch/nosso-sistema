package br.com.nossosistema.backend.dao.oleo;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import br.com.nossosistema.backend.bean.oleo.Carro;

public class CarroDAO extends JdbcDaoSupport{
	
	public Carro findCarroByCdPlaca(String cdPlaca){
		String sql = "SELECT * FROM OLEO.CARRO WHERE cdPlaca = ?";
		 
		Carro carro = getJdbcTemplate().queryForObject( 
				sql, new Object[] { cdPlaca }, 
				new BeanPropertyRowMapper<Carro>(Carro.class));
	 
		return carro;
	}

}
