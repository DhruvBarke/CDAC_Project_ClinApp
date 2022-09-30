package com.company.ClinApp.repository;

import com.company.ClinApp.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	//fetch record with matching username and password
	@Query("select l from Login l where user_name = :user_name and password = :password")
	public Login logincheck(@Param("user_name") String user_name,@Param("password") String password);

	@Query("select l from Login l where user_name = :username")
	public Login forgotPassword(@Param("username") String username);

}
