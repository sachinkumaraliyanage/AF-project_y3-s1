package com.mail.email.controller;



import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mail.email.domain.Email;



@RestController
@RequestMapping(value = "/email")
@CrossOrigin(origins = "*")
public class Emailcontroller {
	
	@Autowired
	public JavaMailSender javaMailSender;
	
	@RequestMapping(value = "/send",method=RequestMethod.POST)
	public ResponseEntity<?> addEmployee(@RequestBody Email email) {
		System.out.println("email come");
		System.out.println(email.getTo());
		System.out.println(email.getSub());
		System.out.println(email.getBody());
		try {
			MimeMessage  mime=javaMailSender.createMimeMessage();
			MimeMessageHelper me= new MimeMessageHelper(mime,true);
			me.setTo(email.getTo());
			me.setSubject(email.getSub());
			me.setText(email.getBody(),true);
			
			javaMailSender.send(mime);
			return new ResponseEntity<>(null, HttpStatus.OK);
			
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
		
	}
//https://myaccount.google.com/u/0/lesssecureapps
}
