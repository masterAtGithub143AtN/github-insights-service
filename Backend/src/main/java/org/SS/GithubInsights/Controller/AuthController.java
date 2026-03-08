package org.SS.GithubInsights.Controller;
import org.SS.GithubInsights.dto.LoginRequest;
import org.SS.GithubInsights.dto.SignupRequest;
import org.SS.GithubInsights.dto.AuthResponse;
import org.SS.GithubInsights.service.AuthService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {

        AuthResponse response = authService.login(request);

        return ResponseEntity.ok(response);
    }

    // Signup
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(@RequestBody SignupRequest request) {

        AuthResponse response = authService.signup(request);

        return ResponseEntity.ok(response);
    }

}