    function formatDateTime(dateTime) {
        const date = new Date(dateTime);
        const pad = (num) => num.toString().padStart(2, '0');
        
        const day = pad(date.getDate());
        const month = pad(date.getMonth() + 1);
        const year = date.getFullYear();
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());

        //teste subir
        
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
// testadno
    setInterval(function () {
        $.get("https://85.31.63.241:3001/anilhas", function(data) {
            let obj = data;
            
            $('#table > tbody').empty();
            $('#table > caption').text("0" + obj.length + " AVE(S) NO NINHO");

            obj.forEach(function(dev) {
                let person = dev.anilha;
                if (dev.nome != null) {
                    person = dev.nome;
                }
                
                const formattedDate = formatDateTime(dev.entrada);

                $('#table > tbody').append(
                    `<tr><td class='text-center'><b>${person}</b></td><td class='d-none d-md-table-cell text-center'><b>${formattedDate}</b></td></tr>`
                );
            });
        });
    }, 2000);  
