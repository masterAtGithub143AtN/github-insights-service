package org.SS.GithubInsights.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
    @GetMapping({"/","/greet"})
    public String greeting() {
        return "Hello, welcome to GitHub Insights!";
    }
}
