// rated dimensions of the persona (ydimension, xdimension, fdimension, x_traits, y_pointers) 

struct User {
    email: String,
    preferred_name: String,
    
    active: bool,
    sign_in_count: u64,
 /*   
    id: String,
    known_as: String,
    salute: String,
    first_name: String,
    last_name: String,
    nick_name: String,
    about_me: String,
    url: String,
    birth_date: String,
    birth_place: String,
    home_community: String,
    current_community: String,
    preferred_locale: String,
    credit_limit: String,
    rating: String,
    created_time: String,
    updated_time: String,
    groups: Vec<String>,
    interests: Vec<String>,
    roles: Vec<String>,

 */
}

fn main() {

  let email = "duong.batien@gmail.com".to_string();
  let preferred_name = "Dr. Duong BaTien".to_string();
  
  let me = build_user(email, preferred_name);

  println!("My email is {}", me.email);   
  println!("My preferred_name is {}", me.preferred_name);

  println!("Am I active: {}", me.active);
  println!("My sign_in_count {}", me.sign_in_count);
  
}

fn build_user(email: String, preferred_name: String) -> User {
  User {
    preferred_name, email,
    active: true,
    sign_in_count: 1,
    
  }
}


