package com.lti;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartFile;

@Configuration
public class AppConfig {
	
	@Bean
	public MultipartFile getMultiPaFile() {
		MultipartFile obj = new MultipartFile() {
			
			@Override
			public void transferTo(File dest) throws IOException, IllegalStateException {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public boolean isEmpty() {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public long getSize() {
				// TODO Auto-generated method stub
				return 0;
			}
			
			@Override
			public String getOriginalFilename() {
				// TODO Auto-generated method stub
				return null;
			}
			
			@Override
			public String getName() {
				// TODO Auto-generated method stub
				return null;
			}
			
			@Override
			public InputStream getInputStream() throws IOException {
				// TODO Auto-generated method stub
				return null;
			}
			
			@Override
			public String getContentType() {
				// TODO Auto-generated method stub
				return null;
			}
			
			@Override
			public byte[] getBytes() throws IOException {
				// TODO Auto-generated method stub
				return null;
			}
		};
		return obj;
	}

}
