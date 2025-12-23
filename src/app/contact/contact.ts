import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.css']
})
export class Contact {
    email = 'ngudomakuya4@gmail.com';
    phone = '066 385 9151';
    location = '24 Mohlaba Street, Atteridgeville, Pretoria, 0008s';

    socialLinks = [
        {
            name: 'Facebook',
            icon: 'fa-brands fa-facebook-f',
            url: 'https://facebook.com/yourpage'
        },
        {
            name: 'Instagram',
            icon: 'fa-brands fa-instagram',
            url: 'https://instagram.com/yourpage'
        },
        {
            name: 'Twitter',
            icon: 'fa-brands fa-x-twitter',
            url: 'https://twitter.com/yourpage'
        },
        {
            name: 'WhatsApp',
            icon: 'fa-brands fa-whatsapp',
            url: 'https://wa.me/27712345678'
        }
    ];
}
