import { OnInit, Component } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent implements OnInit {
  form: FormGroup;
 

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: [''],
      // Añadir otros campos según sea necesario
    });
  }

  ngOnInit(): void { 
    console.log("ejecutar");
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get telefono() { return this.form.get('telefono'); }
  get descripcion() { return this.form.get('descripcion'); }
  // Añadir getters para otros campos

  guardar() {
    if (this.form.valid) {
      //enviamos a archiva
      console.log(this.form);
    } else {
      this.form.markAllAsTouched(); // Mostrar errores si el formulario es inválido
    }
  }

  guardarBorrador() {
    //enviamos a archiva
    console.log(this.form);
  }
}

 
  