var SnippetLogin=function(){function o(e,a,i){var l=$('<div class="m-alert m-alert--outline alert alert-'+a+' alert-dismissible" role="alert">\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\t\t\t<span></span>\t\t</div>');e.find(".alert").remove(),l.prependTo(e),l.animateClass("fadeIn animated"),l.find("span").html(i)}function n(){m.removeClass("m-login--forget-password"),m.removeClass("m-login--signup"),m.addClass("m-login--signin"),m.find(".m-login__signin").animateClass("flipInX animated")}function e(){$("#m_login_forget_password").click(function(e){e.preventDefault(),m.removeClass("m-login--signin"),m.removeClass("m-login--signup"),m.addClass("m-login--forget-password"),m.find(".m-login__forget-password").animateClass("flipInX animated")}),$("#m_login_forget_password_cancel").click(function(e){e.preventDefault(),n()}),$("#m_login_signup").click(function(e){e.preventDefault(),m.removeClass("m-login--forget-password"),m.removeClass("m-login--signin"),m.addClass("m-login--signup"),m.find(".m-login__signup").animateClass("flipInX animated")}),$("#m_login_signup_cancel").click(function(e){e.preventDefault(),n()})}var m=$("#m_login");return{init:function(){e(),$("#m_login_signin_submit").click(function(e){e.preventDefault();var r=$(this),t=$(this).closest("form");t.validate({rules:{email:{required:!0,email:!0},password:{required:!0}}}),t.valid()&&(r.addClass("m-loader m-loader--right m-loader--light").attr("disabled",!0),t.ajaxSubmit({url:"",success:function(e,a,i,l){setTimeout(function(){r.removeClass("m-loader m-loader--right m-loader--light").attr("disabled",!1),o(t,"danger","Incorrect username or password. Please try again.")},2e3)}}))}),$("#m_login_signup_submit").click(function(e){e.preventDefault();var r=$(this),t=$(this).closest("form");t.validate({rules:{email:{required:!0,email:!0}}}),t.valid()&&(r.addClass("m-loader m-loader--right m-loader--light").attr("disabled",!0),t.ajaxSubmit({url:"http://api.alfredfood.com.br/usuario/esqueci-minha-senha",method:"POST",success:function(e,a,i,l){setTimeout(function(){r.removeClass("m-loader m-loader--right m-loader--light").attr("disabled",!1),t.clearForm(),t.validate().resetForm(),n();var e=m.find(".m-login__signin form");e.clearForm(),e.validate().resetForm(),o(e,"success","Thank you. To complete your registration please check your email.")},2e3)}}))}),$("#m_login_forget_password_submit").click(function(e){e.preventDefault();var t=$(this),s=$(this).closest("form");s.validate({rules:{email:{required:!0,email:!0}},messages:{email:{required:"Campo obrigatório.",email:"Digite um email válido."}}}),s.valid()&&(t.addClass("m-loader m-loader--right m-loader--light").attr("disabled",!0),s.ajaxSubmit({url:"http://api.alfredfood.com.br/usuario/esqueci-minha-senha",method:"POST",success:function(e,a,i,l){t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled",!1),s.clearForm(),s.validate().resetForm(),n();var r=m.find(".m-login__signin form");r.clearForm(),r.validate().resetForm(),o(r,"success","Legal! A recuperação de senha foi enviada para o seu e-mail")},error:function(){t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled",!1)}}))})}}}();jQuery(document).ready(function(){SnippetLogin.init()});