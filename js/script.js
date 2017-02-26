$(document).ready(function () {
    var button_done = "#done";
    var button_sort = "#sort";
    $(button_done).click(function () {
        var comment =  $("textarea").val();
        $("<li>" + comment + "</li>").appendTo(".ulcom");
        $("textarea").val('');
        $("textarea").focus();
    });

    function sortUnorderedList() {
        var listArray = [];
        var list = $(".ulcom").children('li');
        $(".ulcom").children('li').each(function(n,v){listArray.push($(this).text());})
        var vals = BubbleSort(listArray);

        for(i = 0, l = list.length; i < l; i++)
            list[i].innerHTML = vals[i];
    }
    function BubbleSort(A)
    {
        var n = A.length;
        for (var i = 0; i < n-1; i++)
            {
                for (var j = 0; j < n-1-i; j++)
                {
                    if (A[j+1].length < A[j].length)
                    {
                        var t = A[j+1];
                        A[j+1] = A[j];
                        A[j] = t;
                    }
                }
            }
        return A;
    }
    $(button_sort).click(function () {
        sortUnorderedList('.ulcom');
    });
})
