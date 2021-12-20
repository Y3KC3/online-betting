import { Text, View } from '@react-pdf/renderer';

function PdfElement ({ currentEvent }) {
    return (
        <View style={{ margin: '10px auto', color: '#666' }}>
            <Text style={{ fontSize: '12px' }}>ID Del Evento: {currentEvent._id}</Text>
            <Text style={{ fontSize: '12px' }}>Descripcion: {currentEvent.description}</Text>
            <Text style={{ fontSize: '12px' }}>Liga: {currentEvent.league}</Text>
            <Text style={{ fontSize: '12px' }}>Equipo #1: {currentEvent.teamOne}</Text>
            <Text style={{ fontSize: '12px' }}>Equipo #2: {currentEvent.teamTwo}</Text>
            <Text style={{ fontSize: '12px' }}>Monto Total Recaudado: ${currentEvent.totalAmount}</Text>
            <Text style={{ fontSize: '12px' }}>Fecha Limite Para Cancelar: {currentEvent.paymentDate}</Text>
        </View>
    )
}

export default PdfElement;