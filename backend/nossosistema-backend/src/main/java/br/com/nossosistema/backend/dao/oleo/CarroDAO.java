package br.com.nossosistema.backend.dao.oleo;

import java.util.List;

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
		 
		List<Carro> carros = getJdbcTemplate().query( 
				sql, new Object[] { cdPlaca }, 
				new BeanPropertyRowMapper<Carro>(Carro.class));
	 
		if(carros.isEmpty()){
			return null;
		}
		return carros.get(0);
	}
	
	@Autowired
	public void setDs(DataSource dataSource){
		setDataSource(dataSource);
	}

}
