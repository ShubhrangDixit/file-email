package com.lti.dto;

import org.springframework.web.multipart.MultipartFile;

public class PicUpload {
	
	private int custId;
	private MultipartFile profilePic;
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public MultipartFile getProfilePic() {
		return profilePic;
	}
	public void setProfilePic(MultipartFile profilePic) {
		this.profilePic = profilePic;
	}
	
	
	
}
