using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using System.Net.NetworkInformation;
using System.Numerics;
using System;
using Microsoft.JSInterop.Implementation;
using Microsoft.JSInterop;

namespace BlazorBattle.Pages
{
    public class IndexBase : Microsoft.AspNetCore.Components.ComponentBase

    {

        public string replyText { get; set; } = String.Empty;

        [Parameter]
        public EventCallback OnKeyDown
        {

            get;

            set;


        }

        //        [Parameter]
        //        Builder.AddAttribute(++subseq, "onkeydown",
        //EventCallback.Factory.Create(
        //this, TaskOnKeyDown
        //)
        //);

        public void KeyPressControlQuestion()
        {
            Console.WriteLine("KeyPressControlQuestion triggerd--------");


            if (replyText != String.Empty)
            {
                Console.WriteLine("De ingevoerde text is opgeroepen vanuit de IndexBase: " + replyText);
            }
            else
            {
                Console.WriteLine("replyText is leeg");
            }

        }

        
    }
}
