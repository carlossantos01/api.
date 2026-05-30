import { useEffect, useState } from 'react'
import './style.css'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function ListarAlunos() {
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        async function fetchAlunos() {
        try {
            // Se der certo
            const response = await api.get('/alunos')
            setAlunos(response.data)
        } catch (erro) {
            // Se der errado.
            toast.erro('Erro ao buscar alunos')
            console.error(erro)
        }
    }
    fetchAlunos()
    }, [])

    return (
        <div className='lista-alunos'>
            <h1>Lista de Alunos</h1>
            <table className='tabela-alunos'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno => (
                        <tr key={aluno.emai}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.telefone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}