package com.example.demo.cmm.util;

import java.util.function.Consumer;

public class Proxy {
	public static Consumer<String> print = System.out::print;
	
}
