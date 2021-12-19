import { React } from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';

function PDFReport({ report }) {
    return (
        <Document>
            <Page size="A4">
                <View style={{ padding: '30px' }}>
                    {console.log(report.currentEvents.error)}
                    {(report.currentEvents.error !== null)
                        ? (report.currentEvents.length !== 0)
                            ? <View>
                                <Text>EVENTOS DE APUESTAS VIGENTES</Text>
                                {report.currentEvents.map(currentEvent =>
                                    <View>
                                        <Text>ID Del Eventp: {currentEvent._id}</Text>
                                        <Text>Descripcion: {currentEvent.description}</Text>
                                        <Text>Liga: {currentEvent.league}</Text>
                                        <Text>Equipo #1: {currentEvent.teamOne}</Text>
                                        <Text>Equipo #2: {currentEvent.teamTwo}</Text>
                                        <Text>Monto Total Recaudado: {currentEvent.totalAmount}</Text>
                                        <Text>Fecha Limite Para Cancelar: {currentEvent.paymentDate}</Text>
                                    </View>
                                )}
                            </View>
                            :   <View>
                                    <Text>EVENTOS DE APUESTAS VIGENTES</Text>
                                    <Text>No Hay Apuestas Vigentes</Text>
                                </View>
                        : <Text></Text>}
                        {(report.eventsEnded.error !== null)
                        ? (report.eventsEnded.length !== 0)
                            ? <View>
                                <Text>APUESTAS FINALIZADAS</Text>
                                {report.eventsEnded.map(eventEnded =>
                                    <View>
                                        <Text>ID Del Eventp: {eventEnded._id}</Text>
                                        <Text>Descripcion: {eventEnded.description}</Text>
                                        <Text>Liga: {eventEnded.league}</Text>
                                        <Text>Equipo #1: {eventEnded.teamOne}</Text>
                                        <Text>Equipo #2: {eventEnded.teamTwo}</Text>
                                        <Text>Monto Total Recaudado: {eventEnded.totalAmount}</Text>
                                        <Text>Fecha Limite Para Cancelar: {eventEnded.paymentDate}</Text>
                                    </View>
                                )}
                            </View>
                            : <View>
                                <Text>APUESTAS FINALIZADAS</Text>
                                <Text>No Hay Apuestas Finalizadas</Text>
                            </View>
                        : <Text></Text>}
                        {(report.eventWithGreaterTotal.error !== null)
                        ? (report.eventWithGreaterTotal.length !== 0)
                            ? <View>
                                <Text>EVENTOS CON MAYOR MONTO TOTAL RECAUDADO</Text>
                                {report.eventWithGreaterTotal.map(greaterTotal =>
                                    <View>
                                        <Text>ID Del Eventp: {greaterTotal._id}</Text>
                                        <Text>Descripcion: {greaterTotal.description}</Text>
                                        <Text>Liga: {greaterTotal.league}</Text>
                                        <Text>Equipo #1: {greaterTotal.teamOne}</Text>
                                        <Text>Equipo #2: {greaterTotal.teamTwo}</Text>
                                        <Text>Monto Total Recaudado: {greaterTotal.totalAmount}</Text>
                                        <Text>Fecha Limite Para Cancelar: {greaterTotal.paymentDate}</Text>
                                    </View>
                                )}
                            </View>
                            : <View>
                                <Text>EVENTOS CON MAYOR MONTO TOTAL RECAUDADO</Text>
                                <Text>No Hay Eventos Realizados</Text>
                            </View>
                        : <Text></Text>}
                        {(report.eventWithLowerTotal.error !== null)
                        ? (report.eventWithLowerTotal.length !== 0)
                            ? <View>
                                <Text>EVENTOS CON MENOR MONTO TOTAL RECAUDADO</Text>
                                {report.eventWithLowerTotal.map(lowerTotal =>
                                    <View>
                                        <Text>ID Del Eventp: {lowerTotal._id}</Text>
                                        <Text>Descripcion: {lowerTotal.description}</Text>
                                        <Text>Liga: {lowerTotal.league}</Text>
                                        <Text>Equipo #1: {lowerTotal.teamOne}</Text>
                                        <Text>Equipo #2: {lowerTotal.teamTwo}</Text>
                                        <Text>Monto Total Recaudado: {lowerTotal.totalAmount}</Text>
                                        <Text>Fecha Limite Para Cancelar: {lowerTotal.paymentDate}</Text>
                                    </View>
                                )}
                            </View>
                            : <View>
                                <Text>EVENTOS CON MENOR MONTO TOTAL RECAUDADO</Text>
                                <Text>No Hay Eventos Realizados</Text>
                            </View>
                        : <Text></Text>}
                        {(report.amountAndBettors.error !== null)
                        ? (report.amountAndBettors.length !== 0)
                            ? <View>
                                <Text>MONTOS Y APOSTADORES</Text>
                                {report.amountAndBettors.map(user =>
                                    <View>
                                        <Text>ID Del Eventp: {user._id}</Text>
                                        <Text>Descripcion: {user.description}</Text>
                                        <Text>Liga: {user.league}</Text>
                                        <Text>Equipo #1: {user.teamOne}</Text>
                                        <Text>Equipo #2: {user.teamTwo}</Text>
                                        <Text>Monto Total Recaudado: {user.totalAmount}</Text>
                                        <Text>Fecha Limite Para Cancelar: {user.paymentDate}</Text>
                                    </View>
                                )}
                            </View>
                            : <View>
                                <Text>MONTOS Y APOSTADORES</Text>
                                <Text>No Hay Usuarios Registrados</Text>
                            </View>
                        : <Text></Text>}
                </View>
            </Page>
        </Document>
    );
};

export default PDFReport;