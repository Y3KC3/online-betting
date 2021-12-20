import { React } from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import PdfElement from '../parts/pdfElement';

function PDFReport({ report }) {
    return (
        <Document>
            <Page size="A4">
                <View style={{ padding: '30px' }}>
                    {console.log(report.currentEvents.error)}
                    {(report.currentEvents.error !== null)
                        ? (report.currentEvents.length !== 0)
                            ? <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>EVENTOS DE APUESTAS VIGENTES</Text>
                                {report.currentEvents.map(currentEvent => <PdfElement currentEvent={currentEvent}/>)}
                            </View>
                            :   <View>
                                    <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>EVENTOS DE APUESTAS VIGENTES</Text>
                                    <Text>No Hay Apuestas Vigentes</Text>
                                </View>
                        : <Text></Text>}
                        {(report.eventsEnded.error !== null)
                        ? (report.eventsEnded.length !== 0)
                            ? <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>APUESTAS FINALIZADAS</Text>
                                {report.eventsEnded.map(eventEnded => <PdfElement currentEvent={eventEnded}/>)}
                            </View>
                            : <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>APUESTAS FINALIZADAS</Text>
                                <Text>No Hay Apuestas Finalizadas</Text>
                            </View>
                        : <Text></Text>}
                        {(report.eventWithGreaterTotal.error !== null)
                        ? (report.eventWithGreaterTotal.length !== 0)
                            ? <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>EVENTOS CON MAYOR MONTO TOTAL RECAUDADO</Text>
                                {report.eventWithGreaterTotal.map(greaterTotal => <PdfElement currentEvent={greaterTotal}/>)}
                            </View>
                            : <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>EVENTOS CON MAYOR MONTO TOTAL RECAUDADO</Text>
                                <Text>No Hay Eventos Realizados</Text>
                            </View>
                        : <Text></Text>}
                        {(report.eventWithLowerTotal.error !== null)
                        ? (report.eventWithLowerTotal.length !== 0)
                            ? <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>EVENTOS CON MENOR MONTO TOTAL RECAUDADO</Text>
                                {report.eventWithLowerTotal.map(lowerTotal => <PdfElement currentEvent={lowerTotal}/>)}
                            </View>
                            : <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>EVENTOS CON MENOR MONTO TOTAL RECAUDADO</Text>
                                <Text>No Hay Eventos Realizados</Text>
                            </View>
                        : <Text></Text>}
                        {(report.amountAndBettors.error !== null)
                        ? (report.amountAndBettors.length !== 0)
                            ? <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>MONTOS Y APOSTADORES</Text>
                                {report.amountAndBettors.map(user =>
                                    <View style={{ margin: '10px auto', color: '#666' }}>
                                        <Text style={{ fontSize: '12px' }}>ID Del Usuario: {user._id}</Text>
                                        <Text style={{ fontSize: '12px' }}>Numero De Identificacion: {user.identificationNumber}</Text>
                                        <Text style={{ fontSize: '12px' }}>Fecha De Expedicion: {user.expeditionDate}</Text>
                                        <Text style={{ fontSize: '12px' }}>Lugar De Expedicion: {user.expeditionPlace}</Text>
                                        <Text style={{ fontSize: '12px' }}>Nombre Completo: {user.firstName} {user.secondName} {user.lastName} {user.secondSurname}</Text>
                                        <Text style={{ fontSize: '12px' }}>Correo: {user.email}</Text>
                                        <Text style={{ fontSize: '12px' }}>Numero De Telefono: {user.phoneNumber}</Text>
                                        <Text style={{ fontSize: '12px' }}>Fecha De Nacimiento: {user.dateOfBirth}</Text>
                                        <Text style={{ fontSize: '12px' }}>Direccion De Residencia: {user.residenceAddress}</Text>
                                        <Text style={{ fontSize: '12px' }}>Municipio: {user.municipality}</Text>
                                        <Text style={{ fontSize: '12px' }}>Sexo: {user.sex}</Text>
                                        <Text style={{ fontSize: '12px' }}>Saldo: ${user.balance}</Text>
                                        <Text style={{ fontSize: '12px' }}>Fecha De Creacion: {user.creationDate}</Text>
                                    </View>
                                )}
                            </View>
                            : <View>
                                <Text style={{ margin: '5px', fontSize: '18px', textAlign: 'center', color: '#444' }}>MONTOS Y APOSTADORES</Text>
                                <Text>No Hay Usuarios Registrados</Text>
                            </View>
                        : <Text></Text>}
                </View>
            </Page>
        </Document>
    );
};

export default PDFReport;