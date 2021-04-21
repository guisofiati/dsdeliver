package io.github.guisofiati.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.guisofiati.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
}