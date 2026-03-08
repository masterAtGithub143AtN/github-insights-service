package org.SS.GithubInsights.service;

import org.SS.GithubInsights.dto.LoginRequest;
import org.SS.GithubInsights.dto.SignupRequest;
import org.SS.GithubInsights.dto.AuthResponse;

public interface AuthService {

    AuthResponse login(LoginRequest request);

    AuthResponse signup(SignupRequest request);

}