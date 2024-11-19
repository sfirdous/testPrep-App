import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function RadioButtons({ options, selectedOption, onSelect }: { options: string[], selectedOption: string, onSelect: (option: string) => void }) {
    const {t} = useTranslation()
    return (
        <View style = {{borderBottomColor : '#becbd0',borderBottomWidth : 1,paddingBottom : '3%'}}>
            {options.map((option: string, index: number) => {
                let active = selectedOption === option;
                return (
                    <TouchableOpacity style={styles.option} key={index} onPress={() => onSelect(option)}>
                        <View >
                            <Icon name={getIconName(index)} size={30} color={active ? "#35a481" : "#becbd0"} />
                        </View>

                        <Text style = {[{color : active ? "#35a481" : "#becbd0"},styles.optionName]}>{t(option)}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const getIconName = (index: number) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return `alpha-${alphabet.charAt(index).toLowerCase()}-circle-outline`;
};


const styles = StyleSheet.create({

    option: {
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'blue',
        alignItems: 'center',
        gap : 6,
        marginVertical : '1%',      
    },
  
    optionName: {
        fontSize: 15,   
        fontWeight: '500',
        letterSpacing: 0.6,
    }

})