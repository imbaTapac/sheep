package TZ_2.controller;

import TZ_2.Entity.User;
import TZ_2.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by Тарас on 23.09.2017.
 */
@Controller
@ComponentScan("TZ_2")
public class UserController {
    @Autowired
    private UserValidator userValidator;

    @RequestMapping(value = "/page",method = RequestMethod.GET)
    public String registration(Model model) {
        model.addAttribute("userForm", new User());

        return "page";
    }
    @RequestMapping(value = "/page", method = RequestMethod.POST)
    public String registration(@ModelAttribute("userForm") User user, BindingResult bindingResult, Model model) {

        userValidator.validate(user, bindingResult);
        if (bindingResult.hasErrors()) {
            return "page";
        }
        return "page";

    }
}
