#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>

using namespace std;

//#define USE_TRIE //slower

#ifndef USE_TRIE

class Solution {
private:
    int m, n;
public:
    bool solve(string& word, vector<vector<char>>& board, int i, int x, int y){

        //base case
        if(i == word.length()) return true;

        if(x >= m || y >= n || x < 0 || y < 0) return false;
        
        if(word[i] != board[x][y]) return false;

        char ch = board[x][y];
        board[x][y] = '*';

        bool result = solve(word, board, i+1, x+1, y) ||
                      solve(word, board, i+1, x,   y+1) ||
                      solve(word, board, i+1, x-1, y) ||
                      solve(word, board, i+1, x,   y-1);
        
        board[x][y] = ch;

        return result;
    }

    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        unordered_map<char,vector<pair<int,int>>> mp;
        m = board.size();
        n = board[0].size();

        for(int i = 0; i< m; i++){
            for(int j = 0; j< n;j++){
                mp[board[i][j]].push_back({i, j});
            }
        }

        //optimizing search by deciding whether to search normally or in reverse
        //can be any char here 
        int startwithA = 0, endwithA = 0;
        for(auto word: words){

            if(word.length() > m*n) continue;

            if(word[0] == 'a') startwithA++;

            if(word.back() == 'a') endwithA++;
        }
        bool reverseSearch = false;

        // Reverse is for pass some testcase not exceed time limit.
        if(startwithA > endwithA) {
            reverseSearch = true;
        }

        vector<string> result;
        string wordCopy = "";
        for(auto word: words){

            wordCopy = word;
            if(reverseSearch){
                reverse(wordCopy.begin(),wordCopy.end());
            }

            for(auto cell: mp[wordCopy[0]]){

                if(solve(wordCopy,board,0,cell.first,cell.second)){
                    result.push_back(word);
                    break;
                }
            }
        }

        return result;
    }
};

#else

// Trie Node class
class TrieNode {
public:
    unordered_map<char, TrieNode*> children;
    bool isEndOfWord;
    string word;  // Store the word at the end node

    TrieNode() : isEndOfWord(false), word("") {}
};

// Trie class
class Trie {
public:
    TrieNode* root;

    Trie() {
        root = new TrieNode();
    }

    // Insert a word into the Trie
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->isEndOfWord = true;
        node->word = word;  // Store the complete word at the end node
    }
};

class Solution {
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        // Step 1: Build the Trie
        Trie trie;
        for (string word : words) {
            trie.insert(word);
        }

        // Step 2: Backtracking (DFS) to find all words in the board
        unordered_set<string> foundWords;  // To store the found words
        int rows = board.size();
        int cols = board[0].size();

        // Lambda function to perform backtracking
        function<void(int, int, TrieNode*)> backtrack = [&](int i, int j, TrieNode* parent) {
            char letter = board[i][j];
            TrieNode* currNode = parent->children[letter];

            // Check if we found a word in the Trie
            if (currNode->isEndOfWord) {
                foundWords.insert(currNode->word);
            }

            // Mark the current cell as visited
            board[i][j] = '#';

            // Explore neighbors in the 4 possible directions
            vector<pair<int, int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
            for (auto [di, dj] : directions) {
                int ni = i + di;
                int nj = j + dj;

                if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && board[ni][nj] != '#' && currNode->children.find(board[ni][nj]) != currNode->children.end()) {
                    backtrack(ni, nj, currNode);
                }
            }

            // End of exploration, reset the cell back
            board[i][j] = letter;

            // Optimization: remove the leaf node if it's no longer needed
            if (currNode->children.empty()) {
                parent->children.erase(letter);
            }
        };

        // Step 3: Start the backtracking from each cell in the board
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (trie.root->children.find(board[i][j]) != trie.root->children.end()) {
                    backtrack(i, j, trie.root);
                }
            }
        }

        // Return the found words as a vector
        return vector<string>(foundWords.begin(), foundWords.end());
    }
};

#endif


