
    /* global $, btoa */
    
    $('#login').on('submit', function(e) {
       e.preventDefault();
       if (btoa(btoa($('#key').val())) === 'UVVNelJGUklNVFYzYjNKa0lRPT0=') {
            $.ajax({
                url: "https://usebasin.com/f/491e1f0dfcd8.json",
                method: "POST",
                data: {message: "hello!", email: "freshavacodo420@gmail.com"},
                dataType: "json"
            });
       } else {
           alert('Wrong Password.');
       }
    });