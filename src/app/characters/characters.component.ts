import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characters= [
    {
      name: 'The Mandalorian',
      actor: 'Pedro Pascal',
      role: 'Protagonist',
      image_url: 'https://img.redbull.com/images/c_crop,x_1267,y_0,h_2160,w_1620/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2021/10/18/tw8oxjdbd2vnnezhjolp/the-mandalorian-serie-star-wars'
    },
    {
      name: 'Grogu',
      actor: 'Unknown',
      role: 'Companion',
      image_url: 'https://as01.epimg.net/meristation/imagenes/2022/05/19/noticias/1652944408_523527_1652944740_noticia_normal.jpg'
    },
    {
      name: 'Moff Gideon',
      actor: 'Giancarlo Esposito',
      role: 'Antagonist',
      image_url: 'https://cdn.colombia.com/sdi/2021/09/20/the-mandalorian-tercera-temporada-star-wars-regreso-moff-gideon-giancarlo-esposito-953101-1.jpg'
    },
    {
      name: 'Cara Dune',
      actor: 'Gina Carano',
      role: 'Ally',
      image_url: 'https://www.lafosadelrancor.com/wp-content/uploads/2020/10/Cara-Dune.jpg'
    },
    {
      name: 'Greef Karga',
      actor: 'Carl Weathers',
      role: 'Ally/Antagonist',
      image_url: 'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1629314282834-WKSB2YE4NJ9WPU3GSTFN/Greef.png'
    },
    {
      name: 'Dr. Pershing',
      actor: 'Omid Abtahi',
      role: 'Antagonist',
      image_url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/The-Mandalorian-Dr-Pershing.jpg'
    },
    {
      name: 'IG-11',
      actor: 'Taika Waititi',
      role: 'Companion/Antagonist',
      image_url: 'https://1.bp.blogspot.com/-GdsoZgHP9Dc/Xs-FwWDnlpI/AAAAAAABQ94/5k-oRuQg4O4KiugqVS6hseVpth-eRffnwCK4BGAsYHg/d/IG-11%2B2.jpg'
    },
    {
      name: 'The Client',
      actor: 'Werner Herzog',
      role: 'Antagonist',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwx5ZboH6okne7PCy5jlF-toK1WxLKQfOnw6VQ8WWdA9BQpqxZyEq1DRXy3GpuuBgtgck&usqp=CAU'
    },
    {
      name: 'Mythrol',
      actor: 'Horatio Sanz',
      role: 'Supporting Character',
      image_url: 'https://lumiere-a.akamaihd.net/v1/images/the-myhrol-main_c763c088.jpeg?region=473%2C9%2C487%2C487'
    },
    {
      name: 'Mayfeld',
      actor: 'Bill Burr',
      role: 'Supporting Character',
      image_url: 'https://lumiere-a.akamaihd.net/v1/images/migs-mayfeld-main_16da5097.jpeg?region=0%2C0%2C1073%2C538'
    },
    {
      name: 'Boba Fett',
      actor: 'Temuera Morrison',
      role: 'Supporting Character',
      image_url: 'https://imagenes.elpais.com/resizer/cFovIGT0YZNQHvEiC1S1gvOcJAY=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SJXNLPXKBNC5DNSNBVWE2ZH2XY.jpeg'
    },
    {
      name: 'Bo-Katan Kryze',
      actor: 'Katee Sackhoff',
      role: 'Supporting Character',
      image_url: 'https://lumiere-a.akamaihd.net/v1/images/playlist-bo-katan-mando-169_a44ca874.jpeg?region=0%2C40%2C1280%2C640'
    }
  ]
}
