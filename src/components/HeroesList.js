import React, { useState } from 'react';
import { ImageGrid } from './ImageGrid';

const Swal = require('sweetalert2')

export const HeroesList=({setCategories,setNames,setFlag})=>{
    
    const [name, setName]= useState(' ');
    const [personajes, setPersonajes]= useState('Personajes');
    const [comics, setComics]= useState('Comics');
    const handleChange2=(e)=>{
        setPersonajes(e.target.value)
    }
    const handleclick=(e)=>{
        e.preventDefault()
        setCategories(name)
        setNames(personajes)
        setFlag('true')
        setName(' ')
        let timerInterval
        Swal.fire({
        title: 'Cargando...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })
    }
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    return(
        <>
            <h1>Marvel Image SearchApp</h1>
            <hr/>
                <form className='row' onSubmit={handleclick}>
                        <div className='col-sm-4'>
                            <div className="form-group">
                                <input className='form-control' placeholder='Ingresa tu Busqueda' name='name' type='text' onChange={handleChange}/>
                            </div>
                        </div>
                    <div className='col-sm-4'>
                    <div className="form-group">
                            <div>
                                <label>Tipo</label>
                                    <select className='form-select'  onChange={handleChange2}>
                                        <option>Personajes</option>
                                        <option>Comics</option>
                                     </select>
                                </div>
                            </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="form-group">
                            <button className='btn btn-outline-primary' type='submit'>Buscar</button>
                        </div>
                    </div>
                </form>
        </>
    )
}

