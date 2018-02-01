package TZ_2.validator;

import TZ_2.Entity.User;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import org.apache.commons.validator.routines.EmailValidator;

/**
 * Created by Тарас on 26.09.2017.
 */
@Component
public class UserValidator implements Validator {



    @Override
    public boolean supports(Class<?> aClass) {

        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        User user = (User) o;

       /* ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "Required");
        if (user.getUsername().length() <=4 || user.getUsername().length() > 20) {
            errors.rejectValue("username", "Size.userForm.username");
        }

        if (userService.findByUsername(user.getUsername()) != null) {
            errors.rejectValue("username", "Duplicate.userForm.username");
        }*/

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "Required");
        if (user.getUsername().length() <=6 || user.getUsername().length() > 24) {
            errors.rejectValue("username", "Size.userForm.username");

        }

        if (!EmailValidator.getInstance().isValid(user.getEmail())) {
            errors.rejectValue("email", "Invalid.userForm.email");
        }

    }
}

