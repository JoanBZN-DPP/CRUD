import { Package, Pencil, Trash2 } from 'lucide-react';
import { urlImagen } from '../utils/format';

export default function TeamTable({ equipos, canDelete, onEdit, onDelte }) {
    if (!equipos.length) {
        return (
            <div className='card empty-state'>
                <Package size={28} />
                <p> Aún no hay equipos registrados</p>
            </div>
        );
    }
}