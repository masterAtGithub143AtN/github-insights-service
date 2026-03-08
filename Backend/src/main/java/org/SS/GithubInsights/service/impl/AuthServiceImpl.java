package org.SS.GithubInsights.service.impl;
import org.SS.GithubInsights.service.AuthService;
import org.SS.GithubInsights.dto.LoginRequest;
import org.SS.GithubInsights.dto.SignupRequest;
import org.SS.GithubInsights.dto.AuthResponse;

import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Override
    public AuthResponse login(LoginRequest request) {

        // validate user
        // generate JWT token

        String token = "jwt_token_example";

        return new AuthResponse(token, "Login successful");
    }

    @Override
    public AuthResponse signup(SignupRequest request) {

        // create user
        // store in database
        // generate token

        String token = "jwt_token_example";

        return new AuthResponse(token, "Signup successful");
    }
}