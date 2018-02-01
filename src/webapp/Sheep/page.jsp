<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>


<head>
    <meta charset="utf-8">
    <title>Urban Wolf - Boutique Brand Management Firm</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#fff">
    <meta name="description" content="Urban Wolf, the Palm Beach based boutique brand management firm with specializations in brand development, branding, and business consulting. No one wants to be the sheep">
    <link rel="shortcut icon" href="Sheep/img/favicon-client2.png" type="image/png">
    <link rel="icon" href="Sheep/img/favicon-client2.png" type="image/png">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" media="all" href="Sheep/css/app.css">


<body>
<!-- BEGIN content -->
<div class="out">
    <header class="header">
        <div class="container header__container">
            <a class="header__logo" href="#"> <svg class="icon icon-logo"><use xlink:href="Sheep/img/sprite.svg#icon-logo"></use></svg> </a>
            <!-- 		<a class="header__logo" href="#">
  <svg class="icon icon-logo"><use xlink:href="img/sprite.svg#icon-logo"></use></svg>
  </a> -->
            <ul class="header__menu">
                <li><a class="header__menu-link" href="#" data-hover="services">services</a></li>
                <li><a class="header__menu-link" href="#" data-hover="Contact">Contact</a></li>
            </ul>
        </div>
        <div class="container">
            <h1 class="title-lg header__title h1-js">NO ONE WANTS TO BE THE <br><span>SHEEP</span></h1>
            <div class="header__decor decor">
                <div class="decor__square decor-js"></div>
                <div class="decor__line decor-line-js"></div>
            </div> <img class="header__bg-img img-js" src="Sheep/img/fc-bg.svg" alt="bg"> </div>
    </header>
    <!--begin services-->
    <div class="services">
        <div class="container">
            <h2 class="title-md services__title" data-aos="fade-up">services</h2>
            <div class="services__list">
                <div class="services__item  services-item-js" data-aos="fade-up-right"> <span class="services__bg-letter serv-letter-js">B</span>
                    <p class="services__item-title serv-text-js">Brand Architecture</p>
                    <div class="services__bg serv-bg-js"></div>
                    <div class="services__topline serv-topline-js"></div>
                    <div class="services__bottomline serv-botline-js"></div>
                    <div class="services__dropdown">
                        <ul class="services__droplist">
                            <li>Vision and Mission</li>
                            <li>Brand strategy</li>
                            <li>Identity</li>
                            <li>Launch planning & Execution</li>
                        </ul>
                    </div>
                </div>
                <div class="services__item  services-item-js" data-aos="fade-up"> <span class="services__bg-letter serv-letter-js">B</span>
                    <p class="services__item-title serv-text-js">Brand Management</p>
                    <div class="services__bg serv-bg-js"></div>
                    <div class="services__topline serv-topline-js"></div>
                    <div class="services__bottomline serv-botline-js"></div>
                    <div class="services__dropdown">
                        <ul class="services__droplist">
                            <li>Strategic council</li>
                            <li>Growth planning</li>
                            <li>Brand tracking and health</li>
                            <li>Pricing</li>
                            <li>Marketing campaign development</li>
                            <li>Social media strategy</li>
                        </ul>
                    </div>
                </div>
                <div class="services__item  services-item-js" data-aos="fade-up-left"> <span class="services__bg-letter serv-letter-js">C</span>
                    <p class="services__item-title serv-text-js">Consulting</p>
                    <div class="services__bg serv-bg-js"></div>
                    <div class="services__topline serv-topline-js"></div>
                    <div class="services__bottomline serv-botline-js"></div>
                    <div class="services__dropdown">
                        <p>Let us take our 14 years of entrepreneurial experience and assist you in achieving your business goals. With a deep rooted history in multiple industries from luxury, consumer packaged goods, and business services, we have done it all
                            and provided consulting to clients across the world. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end services-->
    <!--begin clients-->
    <div class="clients" style="display:none">
        <div class="container">
            <h2 class="title-md clients__title" data-aos="fade-up">clients</h2>
            <div class="clients__list">
                <div class="clients__item" data-aos="zoom-in"> <img src="Sheep/img/client1.png" alt="alt"> </div>
                <div class="clients__item" data-aos="zoom-in"> <img src="Sheep/img/client2.png" alt="alt"> </div>
                <div class="clients__item" data-aos="zoom-in"> <img src="Sheep/img/client3.png" alt="alt"> </div>
                <div class="clients__item" data-aos="zoom-in"> <img src="Sheep/img/client4.png" alt="alt"> </div>
            </div>
        </div>
    </div>
    <!--end clients-->
    <!--begin map-block-->
    <div class="map-block">
        <div class="container">
            <h2 class="title-md map-block__title" data-aos="fade-up">GET IN TOUCH</h2>
            <p class="map-block__title-sec" data-aos="fade-up">Now Accepting Limited Clients</p>
        </div>

        <div class="container map-block__wrap" style="background-image: url('/Sheep/img/map.jpg');" data-aos="fade-up">
            <div class="form">

                <form:form method="POST" modelAttribute="userForm">
                    <strong class="form__title">Contact form</strong>

                    <spring:bind path="username">
                            <div class="form-group ${status.error ? 'has-error' : ''}">
                    <p class="form__placehold">Full Name</p> <form:input path="username" class="form__input" name="name" type="text"
                                                                         pattern="^[а-яА-ЯёЁa-zA-Z0-9\s]+$" required="1"></form:input>
                                <form:errors path="username"></form:errors>
                    </div>
                        </spring:bind>

                    <spring:bind path="email">
                        <div class="form-group ${status.error ? 'has-error' : ''}">
                            <p class="form__placehold">Full Name</p> <form:input path="email" type="email" class="form__input" name="_replyto" pattern="/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i" required="1"></form:input>
                            <form:errors path="email"></form:errors>
                        </div>
                    </spring:bind>

                    <button class="form__btn" type="submit">Send Now</button>
                </form:form>


            </div>
        </div>
    </div>
    <!--end map-block-->
    <footer class="footer">
        <div class="container">
            <a class="footer__logo" href="#"> <svg class="icon icon-logo"><use xlink:href="Sheep/img/sprite.svg#icon-logo"></use></svg> </a>
            <p class="footer__copyright"> <span>&copy;</span> 2017 URBAN WOLF MANAGEMENT LLC. ALL RIGHTS RESERVED </p>
        </div>
    </footer>
</div>
<!-- END content -->
<!-- BEGIN scripts -->
<script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
<script type="text/javascript" src="Sheep/js/app.js"></script>
<script>
    (function(i, s, o, g, r, a, m)
    {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function()
                {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
        a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-92278859-1', 'auto');
    ga('send', 'pageview');

</script>
<!-- END scripts -->
</body>

</html>
