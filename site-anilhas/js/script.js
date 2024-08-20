function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    const pad = (num) => num.toString().padStart(2, '0');
    
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

setInterval(function () {
    $.get("https://85.31.63.241:3001/listarAnilha", function(data) {
        let obj = data;
        
        $('#table > tbody').empty();
        $('#table > caption').text(obj.length + " AVE(S) NO NINHO");

        obj.forEach(function(dev) {
            let person = dev.anilha;
            let codigo = dev.codigo;
            
            if (dev.nome != null) {
                person = dev.nome;
                codigo = dev.codigo;
            }
            
            let actionButtons = ''; 
            const formattedDate = formatDateTime(dev.entrada);
            const currentPath = window.location.pathname;

            if (currentPath === '/tabelaAnilhas.html') {
                $('#table > tbody').append(
                    `<tr>
                        <td class='text-center'><b>${person}</b></td>
                        <td class='text-center'><b>${codigo}</b></td>
                        <td class='d-none d-md-table-cell text-center'><b>${formattedDate}</b></td>
                        <td class='text-center'>
                            <button class='btn btn-primary btn-sm' onclick='acceptAnilha(${dev.id})'>Editar</button>
                            <button class='btn btn-danger btn-sm' onclick='deleteAnilha(${dev.id})'>Excluir</button>
                        </td>
                    </tr>`
                );
            } else {
                $('#table > tbody').append(
                    `<tr>
                        <td class='text-center'><b>${person}</b></td>
                        <td class='text-center'><b>${codigo}</b></td>
                        <td class='d-none d-md-table-cell text-center'><b>${formattedDate}</b></td>
                    </tr>`
                );
            }
        });
    });
}, 2000);

function acceptAnilha(id) {
    
}

function deleteAnilha(id) {
    if (confirm("Você tem certeza que deseja excluir esta anilha?")) {
        fetch(`https://85.31.63.241:3001/excluirAnilha/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
                document.getElementById(`row-${id}`).remove();
            } else {
                alert("Erro ao excluir anilha");
            }
        })
        .catch(error => {
            console.error("Erro ao excluir anilha:", error);
            alert("Erro ao excluir anilha");
        });
    }
}