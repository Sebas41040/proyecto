package com.proyecto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"controller"})
public class ProyectoApplication {

	public static void main(String[] args) {

		SpringApplication.run(ProyectoApplication.class, args);

	}

}
