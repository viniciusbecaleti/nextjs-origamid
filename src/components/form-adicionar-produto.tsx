'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

import { adicionarProduto } from '@/actions/adicionar-produto'

const adicionarProdutoFormSchema = z.object({
  nome: z.string().min(1, 'Campo obrigatório'),
  preco: z.coerce.number().min(1, 'Campo obrigatório'),
  descricao: z.string().min(1, 'Campo obrigatório'),
  estoque: z.coerce.number().min(1, 'Campo obrigatório'),
  importado: z.boolean(),
})

type AdicionarProdutoFormValues = z.infer<typeof adicionarProdutoFormSchema>

export function FormAdicionarProduto() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdicionarProdutoFormValues>({
    resolver: zodResolver(adicionarProdutoFormSchema),
  })

  async function handleAdicionarProduto(data: AdicionarProdutoFormValues) {
    const response = await adicionarProduto({
      ...data,
      importado: data.importado ? 1 : 0,
    })

    if (response.error) {
      toast(response.error, {
        type: 'error',
      })
      return
    }

    toast(response.success, {
      type: 'success',
    })

    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(handleAdicionarProduto)}>
      <label>
        <span>
          Nome <small style={{ color: '#b00' }}>{errors.nome?.message}</small>
        </span>
        <input {...register('nome')} />
      </label>

      <label>
        <span>
          Preço <small style={{ color: '#b00' }}>{errors.preco?.message}</small>
        </span>
        <input type="number" {...register('preco')} />
      </label>

      <label>
        <span>
          Descrição{' '}
          <small style={{ color: '#b00' }}>{errors.descricao?.message}</small>
        </span>
        <textarea {...register('descricao')} />
      </label>

      <label>
        <span>
          Estoque{' '}
          <small style={{ color: '#b00' }}>{errors.estoque?.message}</small>
        </span>
        <input {...register('estoque')} />
      </label>

      <label>
        <input type="checkbox" {...register('importado')} />
        <span style={{ marginBottom: 0 }}>Importado</span>
      </label>

      <button
        style={{ display: 'block', marginTop: '1rem', marginBottom: '0' }}
        type="submit"
        disabled={isSubmitting}
      >
        Adicionar
      </button>
    </form>
  )
}
