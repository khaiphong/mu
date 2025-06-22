// rated dimensions of the persona (ydimension, xdimension, fdimension, x_traits, y_pointers) 

struct User {
    email: String,
    name: String,
    
    active: bool,
    sign_in_count: u64,
}

fn main() {

  let email = "duong.batien@gmail.com".to_string();
  let name = "Duong BaTien".to_string();
  
  let me = build_user(email, name);

  println!("My email is {}", me.email);   
  println!("My name is {}", me.name);

  println!("Am I active: {}", me.active);
  println!("My sign_in_count {}", me.sign_in_count);
  
}

fn build_user(email: String, name: String) -> User {
  User {
    name, email,
    active: true,
    sign_in_count: 1,
    
  }
}


