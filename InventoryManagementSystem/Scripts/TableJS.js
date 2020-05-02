$(document).ready(function () {
    $(".click").click(function () {
        var proName = $("#ProductName").val();
        var proBarcode = $("#ProductBarcode").val();
        var proExpiry = $("#exdatePicker").val();
        var proCartoons = $("#CartoonTxt").val();
        var proPerCart = $("#pieceTxt").val();
        var proBuying = $("#buyingTxt").val();

        var code = "<tr><td><input type='checkbox' name = 'record' /></td><td>" + proName + "</td><td>" + proBarcode + "</td><td>" + proExpiry + "</td><td>" + proCartoons + "</td><td>" + proPerCart + "</td><td>" + proBuying + "</td> </tr> ";
        $("table .tbody").append(code);
    })

    $(".del").click(function () {
        $("table .tbody").find('input[name="record"]').each(function (){
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }



        })

    });
});