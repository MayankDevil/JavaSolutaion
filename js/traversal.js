/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/script.js
*/
try
{
    let content = document.querySelector("#content .container")

    let searchBar = document.querySelector(" #search #bar ")

    let programData = new Array();

    /*
    -   Fetch & Contact multiple program Data
    -   programData = programData0 + programData1 + programData2 + programData3 + programData4 + programData5 + programData6 + programData7 + programData8 + programData9 + programData10 + programData11 + programData12 + programData13 + programData14 + programData15 + programData16 + programData17
    -   programData = (0 - 17)
    */

    programData = programData.concat(programData0, programData1, programData2, programData3, programData4, programData5, programData6, programData7, programData8, programData9, programData10, programData11, programData12, programData13, programData14, programData15, programData16, programData17)

    /*
        --------------------------------------------------------------------
        [ program data display ] function return layout
        --------------------------------------------------------------------
    */
        
    function programDataDisplay(title, data,name)
    {
        return (`
            <!-- ${title} -->

            <details>
                <summary> ${title} ${data.length} </summary>
                <article id="${name}"></article>
            </details>
        `)
    }

    /*
        --------------------------------------------------------------------
        | program data loop to length OR title set | 
        --------------------------------------------------------------------
    */

    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Program",programData0, "pro")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Basic Program",programData1, "basic")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Singal Dimension Array",programData2, "onearray")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Two Dimension Array",programData3, "twoarray")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Applets",programData4, "applet")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Data Conversion",programData5, "datacon")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Delegation Event Models",programData6, "event")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Exception Handlings",programData7, "exception")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Functionss",programData8, "function")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Graphic with AWT",programData9, "awt")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Inheritacne",programData10, "inheritance")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Input or Ouput",programData11, "io")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Interface",programData12, "interface")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Java DataBase Connectivity",programData13, "jdbc")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Multi-Threading",programData14, "thread")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Object Oriented Programming",programData15, "oop")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Packages",programData16, "package")}</div>`);
    content.insertAdjacentHTML("beforeend",`<div class="container"> ${programDataDisplay("Strings",programData17, "strings")}</div>`);


    function dataTraversal(element,data)
    {
        for (i = 0; i < data.length; i++)
        {    
            element.insertAdjacentHTML("beforeend",`<div> ${data[i].problem} </div>`)

            innerData = element.children

            for (let i = 0; i < innerData.length; i++)
            {                
                innerData[i].onclick = () => {

                    if (data[i].solution != null)
                    {
                        if (data[i].comeout != null)
                        {
                            content.innerHTML = (`
    
                                <h4> ${data[i].problem} </h4>
                                
                                <pre class='console'> ${data[i].solution} </pre>
    
                                <img src='data/output/${data[i].comeout}' class='output'/>
                                
                            `)
                        }
                        else
                        {
                            content.innerHTML = (`
    
                                <h4> ${data[i].problem} </h4>
                                
                                <pre class='console'> ${data[i].solution} </pre>
    
                                <a href='https://mayankdevil.github.io/myData/error.html' class='btn' style='width:100%;border-radius:0'> click to check out </a>                                
                            `)
                        }
                    }
                    else
                    {
                        window.open("https://mayankdevil.github.io/myData/bug.html","_parent")
                    }
                }
               
            }
        }
    }

    dataTraversal(document.getElementById('pro'),programData0)
    dataTraversal(document.getElementById('basic'),programData1)
    dataTraversal(document.getElementById('onearray'),programData2)
    dataTraversal(document.getElementById('twoarray'),programData3)
    dataTraversal(document.getElementById('applet'),programData4)
    dataTraversal(document.getElementById('datacon'),programData5)
    dataTraversal(document.getElementById('event'),programData6)
    dataTraversal(document.getElementById('exception'),programData7)
    dataTraversal(document.getElementById('function'),programData8)
    dataTraversal(document.getElementById('awt'),programData9)
    dataTraversal(document.getElementById('inheritance'),programData10)
    dataTraversal(document.getElementById('io'),programData11)
    dataTraversal(document.getElementById('interface'),programData12)
    dataTraversal(document.getElementById('jdbc'),programData13)
    dataTraversal(document.getElementById('thread'),programData14)
    dataTraversal(document.getElementById('oop'),programData15)
    dataTraversal(document.getElementById('package'),programData16)
    dataTraversal(document.getElementById('strings'),programData17)

    
    document.title = "MayankDevil"
    
    /*
        --------------------------------------------------------------------
        [ searchbar ] on keypress match sub in data display else none
        --------------------------------------------------------------------
        searchBar.onkeyup = function()
        {
            let search = searchBar.value.toUpperCase();
            
            let data_list = document.querySelectorAll('#content .container details')
            
            for(let i = 0; i < data_list.length; i++)
            {
                element = data_list[i].querySelector("summary")

                let  data = element.innerContent || element.innerHTML
                
                if(data.toUpperCase().indexOf(search) > -1)
                {
                    data_list[i].style.display = '';
                }
                else
                {
                    data_list[i].style.display = 'none';
                }
            }
        }
    */ 
    //  =====================================================================
}
catch(error)
{
    console.log(`${error}`)
}
// the end