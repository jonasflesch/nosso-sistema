package br.com.nossosistema.backend.dao.oleo;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import br.com.nossosistema.backend.bean.oleo.Carro;

@Repository
public class CarroDAO extends JdbcDaoSupport{
	
	
	public Carro findCarroByCdPlaca(String cdPlaca){
		String sql = "SELECT * FROM Carro WHERE cdPlaca = ?";
		 
		Carro carro = getJdbcTemplate().queryForObject( 
				sql, new Object[] { cdPlaca }, 
				new BeanPropertyRowMapper<Carro>(Carro.class));
	 
		return carro;
	}
	
	@Autowired
	public void setDs(DataSource dataSource){
		setDataSource(dataSource);
	}

}
